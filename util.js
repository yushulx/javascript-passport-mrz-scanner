function extractMRZInfo(line1, line2) {
    // https://en.wikipedia.org/wiki/Machine-readable_passport
    let result = "";
    // Type
    let tmp = "Type: ";
    tmp += line1[0];
    result += tmp + "<br>";

    // Issuing country
    tmp = "Issuing country: ";
    tmp += line1.substring(2, 5);
    result += tmp + "<br>";

    // Surname
    let index = 5;
    tmp = "Surname: ";
    for (; index < 44; index++) {
        if (line1[index] != '<') {
            tmp += line1[index];
        } else {
            break;
        }
    }
    result += tmp + "<br>";

    // Given names
    tmp = "Given Names: ";
    index += 2;
    for (; index < 44; index++) {
        if (line1[index] != '<') {
            tmp += line1[index];
        } else {
            tmp += ' ';
        }
    }
    result += tmp + "<br>";

    // Passport number
    tmp = "Passport number: ";
    index = 0;
    for (; index < 9; index++) {
        if (line2[index] != '<') {
            tmp += line2[index];
        } else {
            break;
        }
    }
    result += tmp + "<br>";

    // Nationality
    tmp = "Nationality: ";
    tmp += line2.substring(10, 13);
    result += tmp + "<br>";

    // Date of birth
    tmp = line2.substring(13, 19);
    tmp = tmp.substring(0, 2) +
        '/' +
        tmp.substring(2, 4) +
        '/' +
        tmp.substring(4, 6);
    tmp = "Date of birth (YYMMDD): " + tmp;
    result += tmp + "<br>";

    // Sex
    tmp = "Sex: ";
    tmp += line2[20];
    result += tmp + "<br>";

    // Expiration date of passport
    tmp = line2.substring(21, 27);
    tmp = tmp.substring(0, 2) +
        '/' +
        tmp.substring(2, 4) +
        '/' +
        tmp.substring(4, 6);
    tmp = "Expiration date of passport (YYMMDD): " + tmp;
    result += tmp + "<br>";

    // Personal number
    if (line2[28] != '<') {
        tmp = "Personal number: ";
        for (index = 28; index < 42; index++) {
            if (line2[index] != '<') {
                tmp += line2[index];
            } else {
                break;
            }
        }
        result += tmp + "<br>";
    }

    return result;
}