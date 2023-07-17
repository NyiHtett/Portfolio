function Music() {
    return(
        <div>
            <img src={require('./Music.gif')}/>
            <h2> What is the founder of Apple </h2>
            <div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="customRadio1">Estein</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="customRadio2">Bill Gate</label>
</div>
        </div>
    );
}

export default Music;