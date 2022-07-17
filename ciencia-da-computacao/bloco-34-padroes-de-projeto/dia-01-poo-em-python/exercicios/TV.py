class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume + 1 < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume - 1 > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.__canal = canal
        else:
            raise ValueError("Canal só pode ser um valor entre 1 e 99")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
