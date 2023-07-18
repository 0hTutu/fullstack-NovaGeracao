package ProBank;

public class TestaMetodo {
	public static void main(String[] args) {
		Conta contaDoJorge = new Conta();
		contaDoJorge.deposita(50);
		System.out.println(contaDoJorge.saldo);
	}
}
