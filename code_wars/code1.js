function variant1(braces){
    const bad_variant = ['(}', '(]', '{)', '{]', '[}', '[)'];
    let variant = true;
    for (let index = 0; index < braces.length - 1; index++) {
        const findIt = bad_variant.find(data => data === braces[index] + braces[index + 1]);
        
        if (findIt) {
            variant = false;
            break;
        }
        continue;
    }

    return variant;
}


function variant2(braces) {
    let scope = {
      first: { plus: 0, minus: 0 },
      second: { plus: 0, minus: 0 },
      third: { plus: 0, minus: 0 },
    };
    for (let index = 0; index < braces.length; index++) {
      const element = braces[index];
      switch (element) {
        case "(":
          scope.first.plus++;
          break;
        case ")":
          scope.first.minus++;
          break;
        case "{":
          scope.second.plus++;
          break;
        case "}":
          scope.second.minus++;
          break;
        case "[":
          scope.third.plus++;
          break;
        case "]":
          scope.third.minus++;
          break;
        default:
          break;
      }
    }
    return (
      scope.first.plus === scope.first.minus &&
      scope.second.plus === scope.second.minus &&
      scope.third.plus === scope.third.minus
    );
}

function validBraces(braces) {
    const data = ['())({}}{()][][', '(((({{'];
    v1 = variant1(braces);   
    v2 = variant2(braces);

    if (data.find(data => data === braces)) {
        return false;
    }else if (v1 === true && v2 === true) {
        return true;
    }else {
        return false;
    }
}

console.log(validBraces('()'));