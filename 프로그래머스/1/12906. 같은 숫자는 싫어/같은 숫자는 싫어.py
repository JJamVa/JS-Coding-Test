def solution(arr):
    answer = []
    for i in range(0,len(arr)):
        if not answer or answer[-1] != arr[i]:
            answer.append(arr[i])
    return answer