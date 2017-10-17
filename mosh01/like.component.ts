export class LikeComponent {
  private _isSelected: boolean;
  private _likes: number;
  
  constructor(likes: number, isSelected: boolean) {
    this._likes = likes;
    this._isSelected = isSelected;
  }

  onClick() {
    if (this._isSelected) {
      this._likes--;
      this._isSelected = false;
    } else {
      this._likes++;
      this._isSelected = true;
    }
  }

  getLikesCount() {
    return this._likes;
  }

  getIsSelected() {
    return this._isSelected;
  }
}