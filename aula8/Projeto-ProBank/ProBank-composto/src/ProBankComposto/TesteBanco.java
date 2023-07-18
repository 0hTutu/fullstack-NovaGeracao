package ProBankComposto;

public class TesteBanco {
	public static void main(String[] args) {
		Cliente denis = new Cliente();
		denis.nome = "Paulo Guile Alcantara";
		denis.cpf = "091.230.345-24";
		denis.profissao = "Fisico";
		
		Conta contaDoDenis = new Conta();
		contaDoDenis.deposita(200);
	}
}
