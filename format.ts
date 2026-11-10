export const rupiah=(n:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);
export const number=(n:number)=>new Intl.NumberFormat('id-ID',{maximumFractionDigits:3}).format(Number.isFinite(n)?n:0);
export function unitCost(price:number, pack:number, purchase:string, usage:string){
 if(!price||!pack||price<0||pack<=0) return 0;
 const p=purchase.toLowerCase(), u=usage.toLowerCase();
 const groups:Record<string,string[]>={mass:['kg','gram','g'],volume:['liter','l','ml'],count:['pcs','bottle','pack','box']};
 const group=Object.keys(groups).find(k=>groups[k].includes(p));
 if(!group||!groups[group].includes(u)) return p===u?price/pack:0;
 const base=(v:number,x:string)=>group==='mass'?(x==='kg'?v*1000:v):group==='volume'?(x==='liter'?v*1000:v):v;
 return price/base(pack,p)*base(1,u);
}
