import test from 'node:test';
import assert from 'node:assert/strict';
import {makeTransactions,summarize} from '../src/finance.js';
import {readFileSync} from 'node:fs';
const template=JSON.parse(readFileSync(new URL('../src/transactions.json',import.meta.url)));
test('preset dates stay in range including leap days',()=>{const rows=makeTransactions(template,'2024-02-01','2024-02-29');assert.equal(rows.length,18);assert.equal(rows[0].date,'2024-02-01');assert.equal(rows.at(-1).date,'2024-02-29');assert.ok(rows.every(t=>t.date>='2024-02-01'&&t.date<='2024-02-29'));});
test('invalid date range is rejected',()=>assert.throws(()=>makeTransactions(template,'2026-02-02','2026-02-01')));
test('balances use cents and chronological order',()=>{const s=summarize([{id:2,date:'2026-01-02',amount:-0.2},{id:1,date:'2026-01-01',amount:0.1}],10);assert.equal(s.moneyIn,0.1);assert.equal(s.moneyOut,0.2);assert.equal(s.closing,9.9);assert.deepEqual(s.rows.map(t=>t.balance),[10.1,9.9]);});
test('empty and single transaction date mapping',()=>{assert.deepEqual(makeTransactions([],'2026-01-01','2026-01-31'),[]);assert.equal(makeTransactions([template[0]],'2026-01-01','2026-01-31')[0].date,'2026-01-01');});
