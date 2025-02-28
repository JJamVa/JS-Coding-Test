function solution(edges) {
    let maxNode = 0;
    for (let [a, b] of edges) {
        maxNode = Math.max(maxNode, a, b);
    }

    // 1. 인접 행렬 및 차수 배열 초기화
    let graph = Array.from({ length: maxNode + 1 }, () => []);
    let inDegree = Array(maxNode + 1).fill(0);
    let outDegree = Array(maxNode + 1).fill(0);

    // 2. 그래프 생성 및 차수 계산
    for (let [from, to] of edges) {
        graph[from].push(to);
        outDegree[from]++;
        inDegree[to]++;
    }

    // 3. 생성된 정점 찾기
    let createdNode = -1;
    for (let i = 1; i <= maxNode; i++) {
        if (outDegree[i] >= 2 && inDegree[i] === 0) {
            createdNode = i;
            break;
        }
    }

    // 4. 연결 요소 탐색 (BFS)
    let visited = Array(maxNode + 1).fill(false);
    let donutCount = 0, barCount = 0, eightCount = 0;

    function bfs(start) {
        let queue = [start];
        let nodes = new Set();
        let edgesCount = 0;
        
        visited[start] = true; // ✅ 방문 체크를 미리 수행

        while (queue.length) {
            let node = queue.shift();
            nodes.add(node);

            for (let next of graph[node]) {
                edgesCount++;
                if (!visited[next]) {
                    visited[next] = true; // ✅ 큐에 추가하기 전에 방문 체크
                    queue.push(next);
                }
            }
        }

        let nodeCount = nodes.size;
        if (nodeCount === edgesCount) donutCount++;
        else if (nodeCount === edgesCount + 1) barCount++;
        else eightCount++;
    }

    // 5. 생성된 정점에서 연결된 요소 탐색
    for (let next of graph[createdNode]) {
        if (!visited[next]) {
            bfs(next);
        }
    }

    return [createdNode, donutCount, barCount, eightCount];
}
