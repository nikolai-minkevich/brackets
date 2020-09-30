

module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false
    let arr = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            brakePair = bracketsConfig[j]
            if (brakePair.indexOf(str[i]) == -1) continue

            switch (brakePair.indexOf(str[i])) {
                case 0:
                    // если скобка - любая открывающая, то добавляем в стек
                    // exception for same brakes
                    if (brakePair[0] == brakePair[1]) {
                        if (arr[arr.length - 1] == brakePair[0]) {
                            arr.pop()
                            break;
                        }
                    }
                    arr.push(str[i])
                    break;
                case 1:
                    // если скобка - закрывающая, то 
                    // проверяем посл элемент стека
                    // если он содержит такую же, то 
                    // выкидываем его из стека и идём дальше
                    if (brakePair.indexOf(arr.pop()) !== 0) {
                        return false;
                    }
                    break;
                default:
                    return false
                    break;
            }
        };
    }
    if (arr.length > 0) return false
    return true
}

