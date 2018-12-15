<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset='utf-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="action_page.css">
    </head>
    <body>
        <h2 class="heading">
            Checkout Form
        </h2>
        <div class="body-container">
            <div class="date-container">
                <p class="upper-right">
                    Date: <?php echo $_GET['date'];?><br/>
                    Order Number: <?php echo $_GET['orderNumber']; ?>
                </p>
            </div>
            <div class="info-container">
                <h3 class="info-header">
                    Customer Information
                </h3>
                <p class="information">
                    Customer Name: <?php echo $_GET['fname'] ." ". $_GET['lname'];?> <br/>
                    Address: <?php echo $_GET['address'];?><br/>
                    Phone number: <?php echo $_GET['phone'];?><br/>
                    Mobile number: <?php echo $_GET['mobile'];?><br/>
                    Email Address: <?php echo $_GET['email'];?><br/>
                </p>
            </div>
            <div class="table-container">
                <h3>
                    Your Orders:
                </h3>
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td><?php $_GET['desc1'];?></td>
                        <td><?php $_GET['quantity1'];?></td>
                        <td><?php $_GET['uprice1'];?></td>
                        <td><?php $_GET['tprice1'];?></td>
                    </tr>
                </table>
            </div>
        </div>        
    </body>
</html>