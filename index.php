<?

include  "vendor/autoload.php";
global $conn, $system_techs;
$faker = Faker\Factory::create();
$message = [];
if(isset($_POST["send_message"])) {
    $to_email = "hello@nafish.me";
    $subject = "Enquiry from website";
    $message = "From:".$_POST["name"]."\n".
        "Email:".$_POST["email"]."\n".
        "Mobile:".$_POST["mobile"]."\n\n".
        $_POST["message"];
    $headers = 'From: hello@nafish.me';
    if(mail($to_email,$subject,$message,$headers)){
        $message = [
            "error"=>0,
            "message"=>"Successfully mail sent"
        ];
    } else{
        $message = [
            "error"=>1,
            "message"=>"Ops! something went wrong"
        ];
    }
}
?>
<html lang="en-gb">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/uikit.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css">

    <link rel="icon"  href="assets/images/n..svg">

    <script src="js/uikit.js"></script>
    <script src="js/uikit-icons.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>

    <title>EKSAFAR</title>
</head>
<body class="body">
<section id="preloader"
         class="uk-position-fixed uk-height-1-1 uk-width-1-1 uk-position-top-left uk-background-muted uk-flex uk-flex-middle uk-flex-center uk-hidden" style="z-index: 99">
    <img src="assets/images/n..svg" style="height: 90px">
</section>
<video playsinline autoplay muted loop  style="height:100vh; width: 100vw; position: fixed; object-fit: cover; z-index: -1">
    <source src="assets/videos/banner.mp4" type="video/mp4">
</video>
<section  class="uk-section uk-section-xlarge uk-position-relative  uk-flex uk-flex-middle banner">
    <div class="uk-container uk-container-small uk-text-center">
        <div class="uk-light">
            <img src="assets/images/logo.png" width="170px" style="background-color: white" class="uk-border-circle">
            <h1 class="uk-heading uk-heading-medium uk-text-uppercase">EKSAFAR</h1>
            <p class="uk-text-primary uk-width-xlarge@m uk-margin-auto">
                I'm Nafish, a 23-year-old Indian Freelance Web developer. I'm a weird guy who likes making weird things with web technologies.
                I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                When not working or futzing around with code, I study how to escape from University. Actually for hire.
            </p>
        </div>
    </div>
</section>
<section class="uk-section uk-section-default p-top-none uk-padding">
    <div class="uk-card uk-card-default uk-container-small uk-margin-auto uk-card-body uk-card-large" style="transform: translateY(-150px)" >
        <h3 class="uk-text-center">CLAIM YOUR FREE TOUR ITINERARY</h3>

        <form method="post" enctype="multipart/form-data" class="uk-margin-medium-top">
            <input type="hidden" name="send_message">
            <div class="uk-child-width-1-1 uk-grid-medium" uk-grid>
                <div class="uk-width-1-2@m">
                    <label for="name">Name</label>
                    <input class="uk-input" name="name" id="name" required>
                </div>

                <div class="uk-width-1-2@m">
                    <label for="mobile">Mobile</label>
                    <input type="number"  min="6000000000" max="9999999999" class="uk-input" name="mobile" id="mobile">
                </div>

                <div class="uk-width-1-2@m">
                    <label for="email">Email</label>
                    <input type="email" class="uk-input" name="email" id="email" required>
                </div>

                <div class="uk-width-1-2@m">
                    <label for="no_of_person">Number of person</label>
                    <input type="number"  min="1" class="uk-input" name="no_of_person" id="no_of_person">
                </div>

                <div class="uk-width-1-2@m">
                    <label for="destination">Destination</label>
                    <select class="uk-select" name="destination" id="destination">
                    </select>
                </div>

                <div class="uk-width-1-2@m">
                    <label for="traveling_date">Traveling date</label>
                    <input type="date" class="uk-input" name="traveling_date" id="traveling_date">
                </div>



                <div class="uk-text-center uk-margin-medium-top">
                    <button type="submit" class="uk-button uk-button-primary">
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    </div>


    <div style="margin-top: -150px">
        <div class="uk-container uk-margin-large-top">
            <div class="uk-text-center uk-width-xlarge uk-margin-auto">
                <h3>YOUR COMPANY MISSION STATEMENT OR ULTIMATE VALUE.</h3>
                <p>Add some more descriptive content here to describe your product or service. What your offer is and how you can improve your potential customers daily experience. This could also be an explanation of the details of your offer if you are running a specific promotion.</p>
            </div>
        </div>
    </div>
</section>
<section class="uk-section uk-section-large uk-section-muted">
    <div class="uk-container uk-container uk-margin-large">
        <div class="uk-child-width-1-2@m uk-child-width-1-1@s uk-grid-match uk-grid-large" uk-grid>
            <div>

                <img src="https://source.unsplash.com/random/200x200" class=" uk-width-1-1">
                <div class="uk-margin-medium-top">
                    <h3 class="uk-margin-remove-bottom">YOUR MAIN FEATURES</h3>
                    <p class="uk-margin-small-top">This is content describing the main features of your product or service. It should act as a supporting description of the benefit statements.</p>
                    <ul class="uk-list uk-list-bullet">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nulla posuere scelerisque diam, vitae consectetur tellus.</li>
                        <li>Aliquam elementum sit amet risus iaculis accumsan.</li>
                        <li>Fusce quam eros, rutrum a erat gravida, suscipit elementum.</li>
                        <li>Curabitur imperdiet purus non porta eleifend.</li>
                    </ul>
                </div>
            </div>

            <div>

                <img src="https://source.unsplash.com/random/200x200" class=" uk-width-1-1">
                <div class="uk-margin-medium-top">
                    <h3 class="uk-margin-remove-bottom">YOUR MAIN FEATURES</h3>
                    <p class="uk-margin-small-top">This is content describing the main features of your product or service. It should act as a supporting description of the benefit statements.</p>
                    <ul class="uk-list uk-list-bullet">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nulla posuere scelerisque diam, vitae consectetur tellus.</li>
                        <li>Aliquam elementum sit amet risus iaculis accumsan.</li>
                        <li>Fusce quam eros, rutrum a erat gravida, suscipit elementum.</li>
                        <li>Curabitur imperdiet purus non porta eleifend.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="uk-section-muted uk-section uk-section-secondary"
         style="background-color: var(--color-secondary-dark)">
    <div class="uk-container-small uk-container uk-text-center">
        <a class="uk-button uk-button-text">&copy; EKSAFAR CLUB. All rights reserved.</a>
    </div>

</section>

<div class="social-icons" style="">
<a class="facebook"><span uk-icon="facebook"></span></a>
<a class="instagram"><span uk-icon="instagram"></span></a>
<a class="twitter"><span uk-icon="twitter"></span></a>
</div>


<?if(!empty($message)){?>
    <div id="message_modal" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-width-medium uk-text-center">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <span class="uk-text-<?=$message["error"]?"danger":"success"?>"><?= $message["message"]?></span>
        </div>
    </div>
    <script>
        UIkit.modal("#message_modal").show();
    </script>
<?}?>

<script>
    window.onload = function (){
        setTimeout(()=>{
            document.querySelector("#preloader").style.opacity =0;
            setTimeout(()=>{
                document.querySelector("#preloader").style.display ="none";
            }, 250);
        }, 0);

    }
</script>
</body>
</html>