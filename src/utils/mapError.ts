export const mapError = (error: string) => {
  switch (error) {
    case "User already registered":
      return "Usuário já registrado!";
    case "Invalid login credentials":
      return "Usuário ou senha inválidos!";
    default:
      return "Ocorreu um erro!";
  }
};
