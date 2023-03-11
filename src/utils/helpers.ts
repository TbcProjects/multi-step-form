export function isEmpty(obj: { [key: string]: string } | {}): boolean {
  return Object.keys(obj).length === 0;
}

export function yearlyDiscount(cost: number, discount: number) {
  return cost * discount;
}

/**
 * Need function that returns sum total of both the selected plan and all add-ons
 */

//   const addOnTotal = (arr: any, prop: string) => {
//     return arr.reduce(function (
//       a: { [key: string]: string },
//       b: { [key: string]: string }
//     ) {
//       const total = a[prop] + b[prop];
//       console.log(total);
//       return total;
//     });
//   };

//   if (arr.length > 0) {
//     return addOnTotal(addOns, "cost") + planCost;
//   } else {
//     return planCost;
//   }
// };
