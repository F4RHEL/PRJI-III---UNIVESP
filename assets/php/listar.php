<?php
include("config.php");

$result_formulario = "SELECT * FROM formulario ORDER BY id DESC";
$resultado_formulario = mysqli_query($conexao, $result_formulario);

?>
<table class="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-Mail</th>
            <th>Contato</th>
            <th>Modalidade</th>
            <th>Conexão</th>
            <th>Horario</th>
            <th>Vestibular</th>
            <th>Outro Objetivo</th>
        </tr>
    </thead>
    <tbody>
        <?php
            if(($result_formulario) AND ($resultado_formulario->num_rows !=0)){
                while($row_formulario = mysqli_fetch_assoc($resultado_formulario)){
                    ?>
                        <tr>
                            <th><?php echo $row_formulario ['id'];?></th>
                            <td><?php echo $row_formulario ['nome'];?></td>
                            <td><?php echo $row_formulario ['email'];?></td>
                            <td><?php echo $row_formulario ['contato'];?></td>
                            <td><?php echo $row_formulario ['opcao01'];?></td>
                            <td><?php echo $row_formulario ['opcao02'];?></td>
                            <td><?php echo $row_formulario ['horario'];?></td>
                            <td><?php echo $row_formulario ['curso'];?></td>
                            <td><?php echo $row_formulario ['resp'];?></td>
                        </tr>
                    <?php
                
                }
            }else{
                echo "Nenhum Registro encontrado";
            }
        ?>
    </tbody>
</table>