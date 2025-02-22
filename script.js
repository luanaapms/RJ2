function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    //get
    this.getNome = function(){
        return this.nome
    };
    this.getNomeMaiusculo = function () {
        return this.nome.toUpperCase();
    };
    this.getNomeMinusculo = function () {
        return this.nome.toLowerCase();
    };
    this.getTelefoneCelular = function(){
        return this.telefoneCelular
    };
    this.getEmail = function(){
        return this.email
    };
    this.getEmailMaiusculo = function () {
        return this.email.toUpperCase();
    };
    this.getEmailMinusculo = function () {
        return this.email.toLowerCase();
    };
    this.getEndereco = function(){
        return this.endereco
    };

    //set
    this.setNome = function(novoNome){
        this.nome = novoNome
    };
    this.setTelefoneCelular = function(novoTelefoneCelular){
        this.telefoneCelular = novoTelefoneCelular
    };
    this.setEmail = function(novoEmail){
        this.email = novoEmail
    };
    this.setEndereco = function(novoEndereco){
        this.endereco = novoEndereco
    };

    //saida formatada
    this.saida = function(){
        return (`
            ---------------
            Informações do Cliente:
            ${this.getNome()}
            ----------------
            Telefone:
            DDD: ${this.getTelefoneCelular().getDdd()}
            Número: ${this.getTelefoneCelular().getNumero()}
            ----------------
            Endereço: 
            Rua: ${this.getEndereco().getRua()}
            Número: ${this.getEndereco().getNumero()}
            Cidade: ${this.getEndereco().getCidade()}
            Estado: ${this.getEndereco().getEstado()}
            ----------------`)
    }
}

function TelefoneCelular(ddd, numero){
      this.ddd = ddd
      this.numero = numero

      //get
      this.getDdd = function(){
        return this.ddd
      };
      this.getNumero = function(){
        return this.numero
      };
 
     //set
     this.setDdd = function(novoDdd){
        this.ddd = novoDdd;
    };
     this.setNumero = function(novoNumero){
        this.numero = novoNumero;
    };
    
}

function Endereco(estado, cidade, rua, numero){
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numero = numero

    //get
    this.getEstado = function () {
        return this.estado;
    };
    this.getEstadoMaiusculo = function () {
        return this.estado.toUpperCase();
    };
    this.getEstadoMinusculo = function () {
        return this.estado.toLowerCase();
    };
    this.getCidade = function () {
        return this.cidade;
    };
    this.getCidadeMaiusculo = function () {
        return this.cidade.toUpperCase();
    };
    this.getCidadeMinusculo = function () {
        return this.cidade.toLowerCase();
    };
    this.getRua = function () {
        return this.rua;
    };
    this.getRuaMaiusculo = function () {
        return this.rua.toUpperCase();
    };
    this.getRuaMinusculo = function () {
        return this.rua.toLowerCase();
    };
    this.getNumero = function () {
        return this.numero;
    };

    //set
    this.setEstado = function (novoEstado) {
        this.estado = novoEstado;
    };
    this.setCidade = function (novaCidade) {
        this.cidade = novaCidade;
    };
    this.setRua = function (novaRua) {
        this.rua = novaRua;
    };
    this.setNumero = function (novoNumero) {
        this.numero = novoNumero;
    };
}

const telefone1 = new TelefoneCelular("12", "999999999")
const endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987')
const cliente1 = new Cliente("Carlos Conrado Heinz", telefone1, "carlos.conrado@app.com", endereco1);

const telefone2 = new TelefoneCelular("21", "91234-5678")
const endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Av. Ipanema', '456')
const cliente2 = new Cliente("Ana Clara Souza", telefone2, "aninhacs@gmail.com", endereco2);

const telefone3 = new TelefoneCelular("11", "98888-7777");
const endereco3 = new Endereco('SP', 'Campinas', 'Rua São João', '1000');
const cliente3 = new Cliente("Pedro Alves da Silva", telefone3, "alvespedro@outlook.com", endereco3);

const telefone4 = new TelefoneCelular("31", "98765-4321");
const endereco4 = new Endereco('MG', 'Belo Horizonte', 'Av. Afonso Pena', '250');
const cliente4 = new Cliente("Juliana Pereira Costa", telefone4, "julipereira@yahoo.com", endereco4);

const telefone5 = new TelefoneCelular("41", "99887-6655");
const endereco5 = new Endereco('PR', 'Curitiba', 'Rua XV de Novembro', '300');
const cliente5 = new Cliente("Lucas Rocha Martins", telefone5, "lucas.rocha@gmail.com", endereco5);

const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];

function ordenarClientesPeloNome(clientes) {
    return clientes.slice().sort((a, b) => a.getNome().localeCompare(b.getNome()));
}
const clientesOrdenados = ordenarClientesPeloNome(clientes);

clientesOrdenados.forEach(cliente => console.log(cliente.saida()));






