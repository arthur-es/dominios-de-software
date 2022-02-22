
#  WPTrack
## Documento de Arquitetura de Software 
###### Versão 1.0

### 1. Introdução 
#### 1.1 Finalidade
Este documento tem como objetivo definir os aspectos da arquitetura do software WPTrack. Utilizando-se de diferentes pontos de vista de desenvolvimento, para descrever aspectos distintos do sistema. Sua finalidade é capturar e transmitir as decisões arquiteturais significativas que foram feitas no sistema.

#### 1.2 Escopo
Este documento é gerado a partir do levantamento de [requisitos](https://github.com/arthur-es/dominios-de-software/blob/main/README.md) feito para o WPTrack que tem por finalidade auxiliar o levantamento de dados e avaliação de serviços prestados por profissionais. As seções foram extraidas do modelo de documento de arquitetura de software.

#### 1.3 Definições, Acrônimos e Abreviações

#### 1.4 Referências
TECNOLOGIAS

* https://nextjs.org 
* https://supabase.com 
* https://docs.sacflow.io 

MATERIAL
* Slides Ministrados em Sala

LIVROS 
* WAZLAWICK, R. S. Análise e design orientados a objetos para sistemas de informação: Modelagem com UML, OCL e IFML. 3.a edição. Campus, 2010.
* SOMMERVILLE, Ian. Engenharia de Software 8. ed. Tradução Selma Shin Melnikoff; Reginaldo Arakaki; Edilson de Andrade Barbosa. São Paulo: Persson, 2007.

#### 1.5 Visão Geral
A seguir serão definidos os requisitos usados para definir a arquitetura utilizada e quais atributos de qualidade serão priorizados.Quais os padrões arquiteturais serão utilizados conforme os atributos de qualidade selecionados.
Quais e como as visões arquiteturais serão detalhadas e quais os pontos de vista da arquitetura serão utilizados para descrever as visões.

### 2. Contexto da Arquitetura 

#### 2.1 Funcionalidades e Restrições Arquiteturais
|id|tipo|id do documento de requisitos do WPTrack|
| -- |--|--|
| RAS_1  | Requisitos Não-Funcionais  |                RNF01                  |
| RAS_2  | Requisitos Não-Funcionais  |                RNF02                   |
| RAS_3  | Requisitos Não-Funcionais  |                RNF03                   |
| RAS_4  |    Requisitos de dados     |  Todos  |

Os requisitos acima mencionados guiarão toda a arquitetura do sistema.

RAS_2 e RAS_3 estipulam ferramentas que deverão ser usadas no desenvolvimento do sistema para fins de portabilidade e agilidade de entrega.

RAS_1 informa que o contexto da aplicação é WEB, no entanto, o uso das ferramentas de RAS_2 nos leva a adotar a arquitetura __serverless__ enquanto RAS_4 indica um hibridismo com __microsserviços__ além das funcionalidades que deverão estar disponiveis na aplicação.

#### 2.2 Atributos de Qualidades Prioritários
Os atributos de qualidade priorizados pelo uso dessas ferramentas são a __portabilidade__ fornecida pelas ferramentas especificadas de RAS_2 e __produtividade__ decorrente do auto scaling da arquitetura serverless.

### 3. Representação da Arquitetura
Como dito anteriormente o software a ser desenvolvido possui uma arquitetura do tipo Serverless onde constarão alguns microsserviços. Os tópicos a seguir detalham os pontos de vista arquiteturais.


### 4. Ponto de vista do Projetista
#### 4.1 Visão Geral
O modelo arquitetural proposto para a construção deste software será composto por 4 componentes essenciais: frontend, backend serverless, supabase e sackflow.

#### 4.2 Visão de Componentes
O componente Front-end é responsavel pela interação com o usuário e se comunica com o Back-end serverless.

O componente Back-end serverless é o que compõe a lógica do software e o processamento dos dados, se relaciona com o todos os demais componentes. Recebe os dados que os usuarios passam a partir da interação com o front-end, faz o processamento dos dados do supabase e exibe no em dashboards no front-end, repassa as mensagens que os funcionarios informaram atraves do front-end para o sacflow.io enviar para os clientes, após o feedback envia as novas informações para o subase.   

O componente Supabase é o banco de dados do sistema que faz a permanencia dos dados recebidos do back-end tanto de gestão de usuários quanto de estatisticas.

O componente Sacflow.io é responsável por enviar mensagens recebidas do back-end para o whatsapp do cliente via API.

A interação entre os componentes citados neste tópico pode ser visualizada por meio do Diagrama de componentes UML abaixo:

![diagrama de componentes](https://github.com/arthur-es/dominios-de-software/blob/main/public/imagens/diagramaDeComponentes.png)

### 5. Ponto de vista do Desenvolvedor
#### 5.1 Visão Geral
#### 5.2 Visão lógica
#### 5.3 Detalhamento das classes
#### 5.4 Visão de segurança
#### 5.5 Detalhamento de segurança
