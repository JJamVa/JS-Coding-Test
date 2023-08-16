#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int answer = 0;
    int num = 0;
    for(int i = 1; i <= n; i++)
    {
        num = i;
        if(num == n)
        {
            answer += 1;
            break;
        }
        for(int j = i + 1; i + j <= n; j++)
        {
            num += j;
            if(num > n) break;
            if(num <= n) 
            {
                if(num == n)
                {
                    answer += 1;
                break;
                }
                continue;
            }
        }
    }
    return answer;
}