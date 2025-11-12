import NaryTreeNode from "../components/NaryTree";

// Componentes simulados
const ProfileComponent = () => <div>Perfil de usuario</div>;
const SecurityComponent = () => <div>Seguridad y Privacidad</div>;
const PasswordComponent = () => <div>Cambio de contraseña</div>;
const NotificationComponent = () => <div>Notificaciones</div>;
const FAQComponent = () => <div>Preguntas Frecuentes</div>;
const TicketComponent = () => <div>Enviar Ticket</div>;
const StatusComponent = () => <div>Estado de Red</div>;

// Creamos el árbol
const root = new NaryTreeNode("root", "/");

const profile = new NaryTreeNode("Profile", "/profile", ProfileComponent);
const security = new NaryTreeNode("Security & Privacy", "/security", SecurityComponent);
const password = new NaryTreeNode("Password", "/password", PasswordComponent);
const notification = new NaryTreeNode("Notification", "/notification", NotificationComponent);

const account = new NaryTreeNode("Account", "/account");
account.addChild(profile);
account.addChild(security);
account.addChild(password);
account.addChild(notification);

const help = new NaryTreeNode("Help", "/help");
help.addChild(new NaryTreeNode("FAQs", "/faqs", FAQComponent));
help.addChild(new NaryTreeNode("Submit a Ticket", "/ticket", TicketComponent));
help.addChild(new NaryTreeNode("Network Status", "/status", StatusComponent));

root.addChild(account);
root.addChild(help);
root.addChild(new NaryTreeNode("Logout", "/logout", () => <div>Sesión cerrada</div>));

export default root;
