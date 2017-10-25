  <style>
  body
  {
    background: #292d32;
    color:#8c9ab3;
    padding:20px;
  }
  </style>
  <h2>Api progress </h2>
  <?php
// for döngüsünü kullanalım

for ($i=1; $i<=100; $i++)
{
if($i%2==1) // sayı tek mi çift mi
{
echo "<strong>".$i."</strong><br/>"; // sayı tek
}
else
{
echo $i."<br/>"; // sayı çift
}
}
?>
