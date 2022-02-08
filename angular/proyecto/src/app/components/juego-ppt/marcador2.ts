export class Marcador2 {

    puntos_maquina: number = 0;
    puntos_usuario: number = 0;


    actualizarMarcador(result: number): void {
        switch (result) {
            case 1:
                this.puntos_usuario++
                break;
            case 0:
                this.puntos_maquina++
                break;
            default:
                this.puntos_maquina++
                this.puntos_usuario++
                break;
        }
    }


    ponerMarcadoraCero() {
        this.puntos_maquina = 0;
        this.puntos_usuario = 0;
    }


}





