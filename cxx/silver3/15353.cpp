#include <iostream>

int main(int argc, char const *argv[])
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(NULL);

    std::string A,B;
    std::cin >> A >> B;

    int lenA = A.length();
    int lenB = B.length();
    int len = lenA;

    if (lenA < lenB) {
        A.insert(0, lenB - lenA, '0');
        len = lenB;
    } else if (lenA > lenB) {
        B.insert(0, lenA - lenB, '0');
        len = lenA;
    }

    int k = 0;
    std::string output = "";
    for (auto i = len - 1; i >= 0; --i) {
        int a = A[i];
        int b = B[i];
        int c = a+b+k - 96;
        if (c >= 10) {k = 1; c-=10;}
        else k = 0;
        char C = (c+48);
        output = C + output;
    }
    if (k == 1) output = '1' + output;
    std::cout << output;
    return 0;
}
