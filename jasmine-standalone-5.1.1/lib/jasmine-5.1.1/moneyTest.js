import { formatMoney } from "../../../scripts/utils/money.js";
 
describe('test suite :formatMoney', () =>{
    it('test case one', () =>{
    expect(formatMoney(2026)).toEqual('20.26');
    });
    it('test case second',()  =>{
    expect(formatMoney(0)).toEqual('0.00');
    });
    it('test case third', () =>{
        expect(formatMoney(2001.5)).toEqual('20.02');
    });
});