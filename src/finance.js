export function makeTransactions(template,start,end){
 const first=Date.parse(start+'T00:00:00Z'),last=Date.parse(end+'T00:00:00Z');
 if(!Number.isFinite(first)||!Number.isFinite(last)||last<first) throw new Error('Choose an end date on or after the start date.');
 return template.map((t,i)=>({...t,id:i+1,date:new Date(first+Math.round(i/Math.max(1,template.length-1)*(last-first)/86400000)*86400000).toISOString().slice(0,10)}));
}
export function summarize(transactions,opening){
 let balance=Math.round(Number(opening)*100),moneyIn=0,moneyOut=0;
 const rows=[...transactions].sort((a,b)=>a.date.localeCompare(b.date)||a.id-b.id).map(t=>{const cents=Math.round(Number(t.amount)*100);balance+=cents;if(cents>0)moneyIn+=cents;else moneyOut-=cents;return {...t,balance:balance/100};});
 return {rows,opening:Number(opening),moneyIn:moneyIn/100,moneyOut:moneyOut/100,closing:balance/100};
}
