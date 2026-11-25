class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # H es el numero de horas para comer bananas
        """
        Tenemos 1 4 3 2 bananas y tenemos 9 horas
        Podemos comer cierta cantidad en este caso 2
        Si lo que comemos es mayor que la banana de esa hora entonces
        Se acaban pero no podemos comer lo mismo en esa hora
        Bananas: 1 4 3 2
        Bananas por hora: 2 2 2 2
        Horas: 1 2 2 1 = 6
        El k debe de ser menor o igual al ultimo elemento de piles
        El h siempre va a ser mayor que la longitud del arreglo o igual


        """
        k = max(piles)
        left = 1
        right = max(piles)
        if len(piles) == h:
            return max(piles)
        else:
            while left <= right:
                mid = (left + right) // 2
                hours = 0
                for pile in piles:
                    hours += math.ceil(pile / mid)
                print(hours)
                if hours <= h:
                    k = min(k, mid)
                    right = mid - 1
                else:
                    left = mid + 1
               
        return k
