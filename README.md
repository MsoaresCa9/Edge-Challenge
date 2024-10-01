# Edge-Challenge
# Servidor de Captura e Análise de Sinais em Tempo Real

Integrantes: Caio Soares Rossini, Lucas Serrano, Pedro Henrique Nobre e Thomaz  
RM: 555084, 557789, 555170, 557454  
1ESPJ

## Importância da Internet das Coisas (IoT) Atualmente

A Internet das Coisas (IoT) desempenha um papel crucial no mundo moderno, conectando uma ampla gama de dispositivos e objetos do cotidiano à internet. Desde sensores em fábricas até dispositivos de monitoramento em lares, a IoT possibilita a coleta de dados em tempo real e a automação de processos. Essa tecnologia está revolucionando setores como saúde, transporte, agricultura e cidades inteligentes, permitindo uma análise mais eficaz e a tomada de decisões informadas. Ao integrar objetos comuns à rede, a IoT não apenas melhora a eficiência operacional, mas também transforma a experiência do usuário, oferecendo serviços personalizados e resposta imediata às necessidades.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Instalação do MySQL](#instalação-do-mysql)
- [Instalação do Servidor](#instalação)
- [Verificação de Saúde (Health Check)](#verificação-de-saúde-health-check)
- [Vídeo de Apresentação](#vídeo-de-apresentação)
- [Licença](#licença)

## Descrição do Projeto

Este projeto consiste na implementação de um servidor que capta sinais recebidos em tempo real, com foco na análise de médias e na detecção de perdas de desempenho ao longo do tempo. Através da utilização de tecnologias avançadas, este sistema possibilita o monitoramento contínuo de dados, oferecendo insights valiosos sobre a performance de dispositivos conectados.

A arquitetura do servidor é projetada para ser escalável e robusta, garantindo a coleta eficiente de dados de múltiplas fontes simultaneamente. Além disso, as análises realizadas pelo servidor permitem a identificação de padrões de desempenho, ajudando na antecipação de falhas e na otimização de operações.

## Instalação do MySQL

Para instalar o MySQL no terminal do Linux, siga os passos abaixo:

1. **Atualize o sistema:**
   ```bash
   sudo apt-get update
   ```

2. **Instale o MySQL Server:**
   ```bash
   sudo apt-get install mysql-server
   ```

3. **Inicie o serviço MySQL:**
   ```bash
   sudo service mysql start
   ```

4. **Segurança da instalação:**
   Para melhorar a segurança da instalação do MySQL, execute:
   ```bash
   sudo mysql_secure_installation
   ```

5. **Acesse o MySQL:**
   Você pode acessar o MySQL com o seguinte comando:
   ```bash
   sudo mysql -u root -p
   ```

1. **Pré-requisitos:**
   - Certifique-se de que você possui um sistema Linux atualizado.
   - Instale as dependências necessárias:
     ```bash
     sudo apt-get update
     sudo apt-get install -y <dependências necessárias>
     ```

2. **Clone o repositório:**
   ```bash
   git clone https://github.com/seuusuario/fiware-descomplicado.git
   git clone https://github.com/MsoaresCa9/Edge-Challenge
   ```

3. **Configuração do ambiente:**
   - Edite o arquivo de configuração conforme suas necessidades:
     ```bash
     nano config.env
     ```

4. **Iniciar os serviços:**
   ```bash
   docker-compose up -d
   ```

5. **Verifique se os serviços estão em execução:**
   ```bash
   docker ps
   ```

## Verificação de Saúde (Health Check)

Para garantir que os componentes do servidor estão funcionando corretamente, utilize os métodos HTTP de health check dos seguintes serviços:

1. **Serviço de Captura:**
   - Execute a requisição:
     ```bash
     curl -i http://<endereço_do_serviço_captura>:<porta>/health
     ```

2. **Serviço de Análise:**
   - Execute a requisição:
     ```bash
     curl -i http://<endereço_do_serviço_analise>:<porta>/health
     ```

As requisições acima devem retornar o status 200 OK, indicando que os serviços estão operacionais.

## Vídeo de Apresentação

Para uma apresentação detalhada do projeto, assista ao vídeo disponível no YouTube:  
[Vídeo de Apresentação](https://youtu.be/M1-SzxVPeMs)

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

