/**
 * 根据指定的深度和宽度创建数据
 * @param {number} deep - 深度
 * @param {number} breadth - 宽度
 * @returns {Object} - 创建的数据
 */
function createData(deep, breadth) {
    let data = {}; // 创建一个空对象作为初始数据
    let temp = data; // 创建一个变量temp并将其初始化为data

    for (let i = 0; i < deep; i++) { // 循环深度次数
        temp = temp['data'] = {}; // 在temp对象上创建一个data属性，并将其赋值为一个空对象
        for (let j = 0; j < breadth; j++) { // 循环宽度次数
            temp[j] = j; // 在temp对象上创建一个索引为j的属性，并将其赋值为j
        }
    }

    return data; // 返回创建的数据
}

// createData(1, 3); // 1层深度，每层有3个数据 {data: {0: 0, 1: 1, 2: 2}}
// createData(3, 0); // 3层深度，每层有0个数据 {data: {data: {data: {}}}}

console.log(createData(3, 3));