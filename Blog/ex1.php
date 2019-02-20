 <?php
    header("Content-Type text/xml");
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
    echo '<responce>';
        $name = $_GET['name'];

        $grandmaster = array('QAIS','ISLAM','LUCAS','RACHEL');

        if(in_array(strtoupper($name), $grandmaster)){
            echo 'Salut the grandMatster'.htmlentities($name);

        } else if (trim($name) == '') { 
            echo 'Saloute parmezan, quelle est ton nom?';
        } else {
            echo 'je ne te connais pas mec '.htmlentities($name);
        }
    echo '<\responce>';






?>
