<?php
if (isset($_POST['Email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@jcitconsulting.com.ar";
    $email_subject = "Nuevo mensaje de contacto";

    function problem($error)
    {
        header('Content-Type: application/json; charset=utf-8');
        $data = [
            'errors' => true,
            'message' => $error
        ];
        http_response_code(400);
        echo json_encode($data);
        die();
    }

    function success()
    {
        header('Content-Type: application/json; charset=utf-8');
        $data = [
            'errors' => false,
            'message' => 'OK'
        ];
        http_response_code(200);
        echo json_encode($data);
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['name']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])
    ) {
        problem('Parece que hay un problema con el formulario.');
    }

    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'El e-mail parece inválido.';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'El nombre parece inválido.';
    }

    if (strlen($message) < 2) {
        $error_message .= 'Por favor indica el mensaje de tu consulta.';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Se ha recibido la siguiente consulta:\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Nombre: " . clean_string($name) . "\n";
    $email_message .= "E-mail: " . clean_string($email) . "\n";
    $email_message .= "Telefono: " . clean_string($phone) . "\n";
    $email_message .= "Mensaje: " . clean_string($message) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);

    success();
}
?>